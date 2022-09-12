import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import {Link} from 'react-router-dom'

function Landing(props) {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              maximus, metus at eleifend interdum, nisi risus ullamcorper risus,
              ac dignissim dui arcu sed eros. Mauris neque urna, rhoncus et sem
              eget, dapibus tristique sem. Quisque quis dui in odio aliquet
              mattis a a tortor. In quis urna sapien. Integer venenatis quis
              velit et posuere. Etiam in aliquet eros. Nulla eleifend ac mauris
              sed hendrerit. Duis tempor maximus ante, eu imperdiet est aliquet
              non. Cras imperdiet, nisi et vestibulum consequat, mauris massa
              suscipit elit, id vulputate nunc elit ut elit. Nullam quis
              pellentesque diam. Maecenas non vulputate magna, ut fringilla
              mauris.
            </p>
            <Link to='/register' className="btn btn-hero">Login/Register</Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}

export default Landing;
