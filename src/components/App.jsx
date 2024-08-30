import { Route, Routes } from "react-router";
import { ContactsList } from "./Phonebook/Contacts/ContactsList";
import { Filter } from "./Phonebook/Filter/Filter";
import { Form } from "./Phonebook/Form/Form";
import { Section } from "./Phonebook/Section/Section";
import { Layout } from "./Phonebook/Layout/Layout";
import { Home } from "./Phonebook/Home/Home";
import { LoginPage } from "./Phonebook/LoginPage/LoginPage";
import { RegisterPage } from "./Phonebook/RegisterPage/RegisterPage";
import { PrivateRoute } from "./Phonebook/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./Phonebook/PublicRoute/PublicRoute";
import { Div } from "./Phonebook/Section/Div";

export const App = () => {
  
    return (
      // <div
      //   style={{
      //     height: '100%',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 30,
      //     color: '#010101',
      //   }}
      // >
        
        // <Section title="Phonebook">
        //     <Form />
        // </Section>
        // <Section title="Contacts">
        //   <Filter title="Find contacts by name" />
        //   <ContactsList   />
        // </Section>
      // </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
          <Route path="contacts" element={<PrivateRoute>
            <Section>
              <Div>
                <Form />
                <Filter />
                <ContactsList   />
              </Div>
            </Section>
          </PrivateRoute>} />
        </Route>
      </Routes>
    );
}
