/* eslint import/extensions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
// uncomment when working with server
// import axios from 'axios';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';

//import mockdata from './mockEvents.js';
import NavbarComp from './components/navbar.jsx';
import Categories from './components/categories.jsx';
import EventList from './components/eventList.jsx';
import EventPage from './components/eventPage.jsx';
import Geocoder from './components/createEventForm.jsx';
import ChildComponentHolder from './components/appendChild.jsx';
import CreateEvent from './components/CreateEvent.jsx';
import MyEvents from './components/MyEvents.jsx';
import Loggedin from './components/loggedin.jsx';

mapboxgl.accessToken = 'pk.eyJ1IjoiY3NrbGFkeiIsImEiOiJjanNkaDZvMGkwNnFmNDRuczA1cnkwYzBlIn0.707UUYmzztGHU2aVoZAq4g';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      clickedEvent: null,
      view: 'main',
      username: null,
      loggedin: false,
      userID: null,
    };
    this.renderClickedEventTitle = this.renderClickedEventTitle.bind(this);
    this.clickHome = this.clickHome.bind(this);
    this.clickCreateEvent = this.clickCreateEvent.bind(this);
    this.clickMyEvents = this.clickMyEvents.bind(this);
    this.setLoggedin = this.setLoggedin.bind(this);
    this.setUserID = this.setUserID.bind(this);
    this.clickSignout = this.clickSignout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentDidMount() {
    axios.get('/events/category/all')
      .then(({ data }) => {
        console.log(data);
        this.setState({ events: data });
      })
      .catch((err) => { console.log(err); });
  }

  setLoggedin() {
    this.setState({ loggedin: true });
  }

  setUserID(username, userID) {
    this.setState({
      userID, username, view: 'main', loggedin: true, 
    });
    // this.setState({ username });
  }

  clickHome() {
    this.setState({
      view: 'main',
    });
  }

  clickCreateEvent() {
    this.setState({
      view: 'createEvent',
    });
  }

  clickMyEvents() {
    this.setState({
      view: 'myEvents',
    });
  }

  clickSignout() {
    axios.get('/logout')
      .then((response) => {
        console.log(response);
        this.setState({ view: 'main', loggedin: false });
      });
  }

  handleLogin(username, password) {
    const params = {
      username,
      password,
    };
    axios.post('/login', params)
      .then(({ data }) => {
        this.setUserID(data.username, data.id);
        this.setLoggedin();
      })
      .catch((err) => { console.log(err); });
  }

  handleSignup(username, password, email, tel) {
    const params = {
      username,
      password,
      email,
      tel,
    };
    axios.post('/signup', params)
      .then(({ data }) => {
        this.setUserID(data.username, data.userID);
        this.setLoggedin();
      })
      .catch((err) => { console.log(err); });
  }

  renderClickedEventTitle(object) {
    this.setState({
      clickedEvent: object,
      view: 'eventPage',
    });
  }

  render() {
    const {
      events, clickedEvent, view, userID, loggedin, username,
    } = this.state;
    const Navbar = () => (
      <NavbarComp
        loggedin={loggedin}
        clickHome={this.clickHome}
        clickCreateEvent={this.clickCreateEvent}
        clickMyEvents={this.clickMyEvents}
        clickSignout={this.clickSignout}
        handleLogin={this.handleLogin}
      />
    );
    if (view === 'main') {
      return (
        <div>
          <Loggedin
            username={username}
            loggedin={loggedin}
          />
          <Navbar />
          <Categories />
          <EventList
            events={events}
            renderClickedEventTitle={this.renderClickedEventTitle}
          />
        </div>
      );
    } if (view === 'eventPage') {
      return (
        <div>
          <Loggedin
            username={username}
            loggedin={loggedin}
          />
          <Navbar />
          <EventPage
            event={clickedEvent}
            username={username}
          />
        </div>
      );
    } if (view === 'createEvent' && loggedin) {
      return (
        <div>
          <Loggedin
            username={username}
            loggedin={loggedin}
          />
          <Navbar />
          <CreateEvent />
          <Geocoder redirect={this.clickMyEvents} />
        </div>
      );
    } if (view === 'myEvents' && loggedin) {
      return (
        <div>
          <Loggedin
            username={username}
            loggedin={loggedin}
          />
          <Navbar />
          <MyEvents
            userID={userID}
            username={username}
            renderClickedEventTitle={this.renderClickedEventTitle}
          />
        </div>
      );
    }
    return (
      <div>
        <Loggedin
          username={username}
          loggedin={loggedin}
        />
        <NavbarComp
          loggedin={loggedin}
          clickHome={this.clickHome}
          clickCreateEvent={this.clickCreateEvent}
          clickMyEvents={this.clickMyEvents}
          clickSignout={this.clickSignout}
        />
        Sorry :3 Status 404
        <br />
        Please try Logging-in/Signing-up or going to our home
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('app'),
);
