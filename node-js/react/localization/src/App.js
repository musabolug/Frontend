import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import {IntlProvider, FormattedMessage} from 'react-intl'
import Counter from "./components/Counter"
import Todo from "./components/Todo"
const messages= {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var",
  },
  "en-US":{
    title:"Hello World",
    description:"You have {count} new messages",
  }
}

function App() {
  const isLocale = localStorage.getItem("locale")
  const defaultLocale = isLocale? isLocale :navigator.language;
  const [locale,setLocal] = useState(defaultLocale)

  useEffect(() =>{
      localStorage.setItem("locale",locale)
  },[locale])
  
  return (
    <div className="App">
        {/*
        //! Localize konusu
        <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage
          id="title"
        />        

      <p>
      <FormattedMessage id="description" values={{count : 9}}/>      
      </p>

        <br />
        <br />
        <button onClick={() => setLocal("tr-TR")}>TR</button>
        <button onClick={() => setLocal("en-US")}>EN</button>
        </IntlProvider> */}

       {/* //! testing 1  */}
        {/* <Counter /> */}
       {/* //! testing 2 */}
        <Todo />
        
    </div>
  );
}

export default App;
