import React from "react";
import User from "./components/User";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  
  return (
   <div>
     <Header/>
      <div className="container">
  <User
    img="https://images.unsplash.com/photo-1599475735868-a8924c458792?q=80&w=326&auto=format&fit=crop"
    name="John Doe"
    btn="Online"
    detail="Senior Developer"
    sdeatil="San Francisco, CA"
    project={25}
    following={144}
    followers={400}
  />

  <User
    img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
    name="Michael"
    btn="Offline"
    detail="UI/UX Designer"
    sdeatil="New York, USA"
    project={18}
    following={210}
    followers={560}
  />

  <User
    img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
    name="David"
    btn="Online"
    detail="Frontend Developer"
    sdeatil="Los Angeles, USA"
    project={32}
    following={175}
    followers={720}
  />

  <User
    img="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500"
    name="Robert"
    btn="Busy"
    detail="Backend Engineer"
    sdeatil="Chicago, USA"
    project={41}
    following={132}
    followers={890}
  />

  <User
    img="https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500"
    name="James"
    btn="Online"
    detail="Full Stack Developer"
    sdeatil="Seattle, USA"
    project={56}
    following={298}
    followers={1200}
  />
  <User
  img="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500"
  name="William"
  btn="Online"
  detail="Mobile App Developer"
  sdeatil="Austin, USA"
  project={38}
  following={256}
  followers={980}
/>

<User
  img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
  name="Daniel"
  btn="Offline"
  detail="DevOps Engineer"
  sdeatil="Denver, USA"
  project={29}
  following={187}
  followers={645}
/>

<User
  img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
  name="Christopher"
  btn="Online"
  detail="Software Architect"
  sdeatil="Boston, USA"
  project={67}
  following={321}
  followers={1540}
/>

<User
  img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
  name="Matthew"
  btn="Busy"
  detail="Cyber Security Expert"
  sdeatil="Dallas, USA"
  project={44}
  following={276}
  followers={1100}
/>

<User
  img="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500"
  name="Andrew"
  btn="Online"
  detail="Cloud Engineer"
  sdeatil="Miami, USA"
  project={53}
  following={412}
  followers={1680}
/>

<User
  img="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
  name="Joseph"
  btn="Offline"
  detail="Data Scientist"
  sdeatil="Phoenix, USA"
  project={61}
  following={355}
  followers={1425}
/>
</div>
<Footer/>
</div>
  );
};

export default App;
