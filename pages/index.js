import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import Head from 'next/head'
import styled from '@emotion/styled'

import * as gtag from '../lib/gtag'

import Title from '../components/Title'
import Section from '../components/Section'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 420px) {
    flex-direction: column;
  }


  a {
    color: #d7d9ce;
    font-size: 18px;
  }
`

export default () => {
  const MDXActivites = dynamic(() => import(`../site/activites.mdx`))
  const MDXWelcome = dynamic(() => import(`../site/accueil.mdx`))
  const MDXMenu = dynamic(() => import(`../site/menu.mdx`))
  const MDXPhotos = dynamic(() => import(`../site/photos.mdx`))

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  
  return (
    <>
      <Head>
        <title>Le mas d'Eden - Gîte - Lozère</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Le gîte Mas d'Eden, de 80m², situé au pied du Mont-Lozère,  peut acceuillir 9 personnes avec sa terrasse arborée. Aux alentours, chaque saison offre ses possibles: ski, randonnées, pêche, cure thermale, parc d'attraction..." />
      </Head>
      <Title />
      <MDXMenu />
      <MDXWelcome />
      <MDXActivites/>
      <MDXPhotos />
      <Section role="tarifs" id="tarifs">
        <h2>Tarifs</h2>
        <div>
          <div>
            <h3>Haute saison : De Décembre à Mars et de Juillet à Août</h3>

            <p>
              <strong><u>Week-end</u></strong>: Du vendredi 19h au dimanche 17h
              <br/>
              <br/>
              Pour 2 adultes par chambre: <strong>35&nbsp;euros&nbsp;/nuit</strong>
              <br/>
              Pour toute personne supplémentaire : <strong>15&nbsp;euros/nuit</strong> (enfant de moins de 14 ans : <strong>10&nbsp;euros</strong>)
            </p>

            <p>
              <strong><u>Semaine</u></strong>: Du samedi 14h au samedi suivant 10h
              <br />
              <br/>
              <strong>600&nbsp;euros</strong>
            </p>

            <p>
              <u>Tarif groupe 9 personnes</u>: <strong>800&nbsp;euros</strong>
            </p>
          </div>
          <div>
            <h3>Basse saison : de Mars à Juillet et de Septembre à Décembre</h3>
        
            <p>
            <strong><u>Week-end</u></strong>: du vendredi 19h au dimanche 17h
            </p>

            <p>
              Pour 2 adultes par chambre:  <strong>30&nbsp;euros&nbsp;/nuit</strong> 
              <br />
              Pour toute personne supplémentaire : <strong>15&nbsp;euros&nbsp;/nuit</strong>
            </p>

            <p>
              <strong><u>Semaine</u></strong>: Du samedi 14h au samedi suivant 10h
              <br />
              <br />
              <strong>500&nbsp;euros</strong>
            </p>

            <p>
              <u>Tarif groupe 9 personnes</u>: <strong>650&nbsp;euros</strong>
            </p>

            <p>
              <u>Tarif réveillon 9 adultes</u>: <strong>350&nbsp;euros&nbsp;/&nbsp;3&nbsp;jours</strong>
            </p>
          </div>
        </div>

        <p style={{color:'red'}}>
          Une caution vous sera demandée (150 euros non encaissée ).
          <br/>
          À la réservation, des arrhes sont demandés d'un montant de 30% , le reste dû à la remise des clefs.
          <br/>
          Tarif Chauffage: 8 euros supplémentaires si nécessaire
          <br/>
          Le ménage de fin de séjour est à la charge du locataire , possibilité décharge: 45 euros
          <br/>
          Location draps / 10 euros /lits.
          <br/>
          Chèques vacances acceptés.
          <br/>
          Les animaux ne sont pas acceptés.
        </p>

        <p>
          N'hésitez pas à nous contacter pour plus de renseignements.
        </p>
      </Section>
      <Section role="book" id="book">
        <h2>Formulaire de contact</h2>
        <form type="submit" id="form_contact" onSubmit={event => event.preventDefault()}>
          <div>
            <label htmlFor="firstname">Prénom &#42;</label>
            <input type="text" name="firstname" id="firstname" required />
          </div>
          <div>
            <label htmlFor="lastname">Nom de famille &#42;</label>
            <input type="text" name="lastname" id="lastname" required />
          </div>
          <div>
            <label htmlFor="email">Email &#42;</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="phone">Téléphone &#42;</label>
            <input type="tel" pattern="[0-9]{10}" name="phone" id="phone" required />
          </div>
          <fieldset>
            <legend>C'est pour :</legend>
            <input type="radio" id="weekend_family" name="type" />
            <label htmlFor="weekend_family">Week-end en famille</label><br/>

            <input type="radio" id="weekend_couple" name="type" />
            <label htmlFor="weekend_couple">Week-end en couple</label><br/>

            <input type="radio" id="week_family" name="type" />
            <label htmlFor="week_family">Semaine en famille</label><br/>

            <input type="radio" id="week_couple" name="type" />
            <label htmlFor="week_couple">Semaine en couple</label><br/>

            <input type="radio" id="other" name="type" defaultChecked />
            <label htmlFor="other">Autre</label><br/>
          </fieldset>

          <div />

          <div>
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </Section>
      <Section role="contact" id="contact">
        <Wrapper>
          <div>
            <h2>Contact</h2>
            <p>
              <span>Téléphone mobile</span>&nbsp;<a href="tel:0686627406">06 86 62 74 06</a>
              <br/>
              Téléphone mobile&nbsp;<a href="tel:0637161894">06 37 16 18 94</a>
              <br/>
              Téléphone fixe&nbsp;<a href="tel:0637161894">04 66 42 96 53</a>
              <br/>
              Email&nbsp;<a href="mailto:masdenden48@gmail.com">masdenden48@gmail.com</a>
            </p>
          </div>
          <div>
            <iframe
              title="Carte pour arriver au Mas d'Eden"
              height="300"
              width="500"
              frameBorder="0"
              scrolling="auto"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCkzRv1ap3J3zVxQIYobcO_mp6VNCRzrU4&q=Le+Mas,+48190+Mont+Lozère+et+Goulet" allowFullScreen>
            </iframe>
          </div>
        </Wrapper>
      </Section>
    </>
  )
}
