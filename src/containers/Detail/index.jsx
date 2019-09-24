import React, { useEffect, useState } from 'react'
import PageContent from '../../components/PageContent'
import { withRouter } from "react-router-dom";
import { ArrowBack } from '@material-ui/icons';
import CountriesAPI from '../../resourses/country'
import Loading from '../../components/Loading'
import Button from '../../components/Button'
import {
    LabelStyled,
    ValueStyled,
    DataContainer,
    HeaderContainer,
    ImgStyled,
    GridStyled,
    TitleStyled,
    DataContent,
    BordersContent,
    BorderCountriesContent,
} from './style'

const Home = (props) => {
    const { history, match } = props
    const countryName = match.params.id
    const [country, setCountry] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect (() => { 
      CountriesAPI.getByName('alpha', countryName).then((data) => {
        setCountry(data)
          setIsLoading(false)
        })
    }, [countryName]);

    const renderData = (labelText, value) => (
        <div>
            <LabelStyled>{labelText}:</LabelStyled>
            <ValueStyled>{value}</ValueStyled>
        </div>
    )

    const renderBorderContries = (countries) => (
        <BorderCountriesContent>
            <LabelStyled>Border Countries:</LabelStyled>
            <BordersContent>
                {countries.map(item => 
                    <Button onClick={() => history.replace(`/${item}`)}>
                        {item}
                    </Button>
                )}
            </BordersContent>
        </BorderCountriesContent>
    )

    const renderContent = () => (
        <GridStyled container>
            <GridStyled item xs={12} sm={6}>
                <ImgStyled src={country.flag} />
            </GridStyled>
            <GridStyled item xs={12} sm={6}>
                <DataContainer>
                    <TitleStyled>{country.name}</TitleStyled>
                    <DataContent>
                        <div>
                            {renderData('Native Name', country.nativeName)}
                            {renderData('Population', country.population)}
                            {renderData('Region', country.region)}
                            {renderData('Sub Region', country.subregion)}
                            {renderData('Capital', country.capital)}
                        </div>
                        <div>
                            {renderData('Currencies', country.currencies[0].name)}
                        </div>
                    </DataContent>
                    {renderBorderContries(country.borders)}
                </DataContainer>
            </GridStyled>
        </GridStyled>
    )

    const renderHeader = () => (
        <HeaderContainer {...props}>
            <Button onClick={() => history.replace('/')}><ArrowBack /> Back</Button>
        </HeaderContainer>
    )

    return (
        <PageContent>
            {renderHeader()}
            {isLoading ? <Loading /> : renderContent() }
        </PageContent>            
    )
}

export default withRouter(Home)