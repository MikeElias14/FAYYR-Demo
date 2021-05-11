
import React from 'react'

import Link from 'next/link'

// Material-ui imports
import { AppBar, Toolbar, Button } from "@material-ui/core";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        <AppBar>
          <Toolbar>

            {/* Branding - Left */}
            <div>
              <h2>
                <Link href='/'>
                  FAYYR
                </Link>
              </h2>
            </div>

            {/* Navigation - Right */}
              <div>
                  <Button>
                    <Link href='/market'>
                      Market
                    </Link>
                  </Button>
                
                <Button>
                  Charities
                </Button>

                <Button>
                  Sign In
                </Button>
              </div>
            

          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default Header