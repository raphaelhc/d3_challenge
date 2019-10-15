import React, { useEffect, useState, memo } from 'react'
import { withTheme } from 'styled-components';
import { withRouter } from "react-router-dom";
import PageContent from '../../components/PageContent'
import SearchInput from '../../components/SearchInput'
import CountriesAPI from '../../resourses/country'
import Loading from '../../components/Loading'
import Card from './Card'
import {
    CardsContainer,
    ImgStyled,
    TitleStyled,
    LabelStyled,
    ValueStyled,
    DataContainer,
    HeaderContainer,
    SelectStyled,
    PlaceholderContainer
} from './style'

const Home = (props) => {
    const { history } = props
    const [countries, setCountries] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect (() => { 
      CountriesAPI.get().then((data) => {
          setCountries(data)
          setIsLoading(false)
        })
    }, []);

    const renderData = (labelText, value) => (
        <div>
            <LabelStyled>{labelText}:</LabelStyled>
            <ValueStyled>{value}</ValueStyled>
        </div>
    )

    const onSearch = (text) => {
        if(text.length){
            setIsLoading(true)
            CountriesAPI.getWithFilter('name', text).then((data) => {
                setIsLoading(false)
                setCountries(data.message ? [] : data)
            })
        }else{
            CountriesAPI.get().then((data) => {
                setCountries(data)
                setIsLoading(false)
            })  
        }
    }

    const onFilterByRegion = (text) => {
        setIsLoading(true)
        CountriesAPI.getWithFilter('region', text).then((data) => {
            setIsLoading(false)
            setCountries(data.message ? [] : data)
        })
    }

    const renderCard = (item) => (
        <Card 
            key={item.numericCode}
            onClick={() => history.replace(`/${item.alpha3Code}`)}>
            <ImgStyled src={item.flag} />
            <TitleStyled>{item.name}</TitleStyled>
            <DataContainer>
                {renderData('Population', item.population)}
                {renderData('Region', item.region)}
                {renderData('Capital', item.capital)}
            </DataContainer>
        </Card>
    )

    const renderPlaceholder = () => 
        <PlaceholderContainer>
            Search without results
        </PlaceholderContainer>

    const renderContent = () => (
        <CardsContainer>
            {countries.length ? countries.map((item) => renderCard(item)) : renderPlaceholder()}
        </CardsContainer>
    )

    const renderHeader = () => (
        <HeaderContainer {...props}>
            <SearchInput onSearch={onSearch}/>
            <SelectStyled onChange={onFilterByRegion}/>
        </HeaderContainer>
    )

    return (
        <PageContent>
            {renderHeader()}
            {isLoading ? <Loading /> : renderContent() }
        </PageContent>
    )
}

export default memo(withTheme(withRouter(Home)))