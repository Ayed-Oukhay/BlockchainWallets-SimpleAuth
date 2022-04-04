# Testing authentication with Metamask

This project aims to connect a user via different blockchain wallets and then redirect him to a home page while displaying his address and account balance if connected successfully.

## RQs
Functional wallets for the moment: 
- Metamask
- Phantom
- Tronlink (not fully functionning, you need to mmanually first connect to the extension because the popup won't show up)
- Blocto (also not fully functionning, hte problem lies with the balance display)

Web3 is used in this project in order to interact with metamask wallet to send/get requests from the Metamask account (for example the address / balance of the user)
HOWEVER, for some wierd reason, when creating a React app it installs react-scripts version 5.0.0 by default which creates some stupid errors, that's why I downgraded it to version 4.0.3 which solved the problems.

Used libraries:
- axios: lets us make HTTP requests to our backend, and it works similarly to express.
- fcl: The Flow Client Library (FCL) JS is a package used to interact with user wallets and the Flow blockchain.