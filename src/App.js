import './App.css';
import CompoA from './context/CompoA';
import CompoB from './context/CompoB';
import { UserProvider } from './context/userContext';
import RouterConfig from './routes/routerConfig';



function App() {
  return (<>
  <RouterConfig/>

 <UserProvider value="Zahidkhan">
   <CompoA />
 </UserProvider>
<UserProvider value="Gokul sir">
<CompoB />
</UserProvider>
  </>
  );
}

export default App;
