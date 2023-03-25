/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Card, Header, Player} from '../components';
import { useFirebaseContext } from '../context/FirebaseContext'
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg"
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase-config';
import { useNavigate } from 'react-router-dom';
import { Slides } from '../utils/selectionFIlter';
import FooterContainer from "../containers/FooterContainer"
import Fuse from 'fuse.js';

const HomeContainer = () => {
  const { firebaseData } = useFirebaseContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(ROUTES.SIGN_IN);
  }

  useEffect(() => {
    setSlideRows(Slides(firebaseData, category));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, firebaseData?.series, firebaseData?.films])

  // for liveSearch 
  useEffect(() => {
    const fuse = new Fuse(slideRows, {keys : ["data.description", "data.title", "data.genre"]})
    const results = fuse.search(searchTerm).map(({item}) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(Slides(firebaseData, category));
    }
  }, [searchTerm])

  return (
    <> 
      <Header src="joker1" height="750px">
        <Header.Container position="fixed">
          <Header.Group >
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix logo" />
            <Header.TextLink active = {category === "series" ? "true" : "false"} onClick={() => setCategory("series")}>Series</Header.TextLink>
            <Header.TextLink active = {category === "films" ? "true" : "false"} onClick={() => setCategory("films")}>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={firebaseData?.user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={firebaseData?.user.photoURL} />
                  <Header.TextLink>{firebaseData?.user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={handleSignOut}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>

        </Header.Container>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears
            two masks -- the one he paints for his day job as a clown and
            the guise he projects in a futile attempt to feel like he's part
            of the world around him.
          </Header.Text>

          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map(slideItem => (
          <Card key={`${slideItem.title}-${category}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data && slideItem?.data?.map(item => (
                <Card.Item key={item.id} item={item}>
                  <Card.Image src={`images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button>Play</Player.Button>
                <Player.Video src={"/videos/bunny.mp4"} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  );
}

export default HomeContainer