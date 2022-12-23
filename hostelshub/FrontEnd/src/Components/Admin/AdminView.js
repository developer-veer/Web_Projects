import '../../StyledSheets/Home.css';
import '../../StyledSheets/Admin/Adminview.css';
import AdminSidebar from './AdminSidebar';
import Main from './AdminMain';
import { useRef } from 'react';
import { useContext } from 'react';
import ThemeContext from './AdminMain'
const Adminview = (prop) => {

        const context = useContext(ThemeContext);
    const refr = useRef('');
    return ( 

        <section id='main-div' style={{backgroundColor:context}}>
            <section id='side_bar-sec'>
            <AdminSidebar/>
            </section>

            <section id='main-sec' ref={refr} style={{backgroundColor:context}}>
            <Main/>
            </section>

        </section>
     );
}
 
export default Adminview;