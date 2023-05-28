import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";

const init = async () => { 
  const authClient = await AuthClient.create();

if (await authClient.isAuthenticated()){
handleAuthenticated(authClient);
} else {
  await authClient.login({
    identintyProvider:"https://identity.ic0.app/#authorize",
    onSucces: () => {
      handleAuthenticated(authClient);
    }   
  })
}
}

async function handleAuthenticated(authClient){
  ReactDOM.render(<App />, document.getElementById("root")); 
}

init();


