/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

import "./layout.css"

const MainWrapper = styled.main`
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  background-color: black;
  height: 3rem;
  padding: 0 18px;
  font-family: Roboto, sans-serif;
  letter-spacing: 1px;
`

const Branding = styled.div`
  margin: auto 0;
  a {
    color: orange;
    font-size: 1.5rem;
    text-decoration: none;
  }
  
`

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`

const NavLink = styled.div`
  margin: auto 0;

  a {
    color: white;
    padding: 0 15px;
    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
`

const Layout = ({ children }) => {
  
  const navigationQuery = graphql`
    query MyQuery {
    prismic {
      allNavigations {
        edges {
          node {
            branding
            navigation_links {
              link {
                ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
                _linkType
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
              }
              label
            }
          }
        }
      }
    }
  }

  ` 

  return (
    <>
    <Header>
        <StaticQuery query={`${navigationQuery}`} 
          render={(data) => {
            const navData = data.prismic.allNavigations.edges[0].node;
              return (
                <>
                <Branding>
                  <Link to="/">
                    {navData.branding}
                  </Link>
                </Branding>
                <NavLinks>
                  {
                    navData.navigation_links.map(link => {
                      return (
                      <NavLink key={link.link._meta.uid}> 
                        <Link to={`/${link.link._meta.uid}`}>
                          {link.label}
                        </Link>
                      </NavLink>
                   )
                })}
              </NavLinks>
              </>
              )
          }}
        />
    </Header>

      <MainWrapper>{children}</MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
