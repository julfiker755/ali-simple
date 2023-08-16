import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const About = () => {
    return (
        <div className='w-11/12 m-auto my-10 p-2 bg-[#1e2f551d]'>
     <Tabs>
    <TabList>
    <div className='grid grid-cols-2 gap-1 lg:grid-cols-4'>
      <Tab> <button className='bg-[#547eda1d] w-full py-2 rounded-md'>Overview</button></Tab>
      <Tab><button className='bg-[#547eda1d] w-full py-2 rounded-md'>Locations</button></Tab>
      <Tab><button className='bg-[#547eda1d] w-full py-2 rounded-md'>Reviews</button></Tab>
      <Tab><button className='bg-[#547eda1d] w-full py-2 rounded-md'>Business Hours</button></Tab>
    </div>
    </TabList>

    <TabPanel>
      <div className='my-4'>
        <h1 className='text-2xl lg:text-3xl font-semibold'>About Me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='grid my-3 grid-cols-1 md:grid-cols-2'>
          <div>
          <h1 className='text-xl font-semibold my-3'>Education</h1>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>BDS</li>
                  <li>1998 - 2003</li>
               </ul>
           </ul>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>MDS</li>
                  <li> 2003 - 2005</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Work & Experience</h1>
           <ul className='list-disc'>
            <li>Glowing Smiles Family Dental Clinic</li>
               <ul>
                  <li>2010 - Present (5 years)</li>
               </ul>
               <li>Comfort Care Dental Clinic</li>
               <ul>
                  <li>2007 - 2010 (3 years)</li>
               </ul>
               <li>Dream Smile Dental Practice</li>
               <ul>
                  <li>2005 - 2007 (2 years)</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Services</h1>
           <ul className='list-disc'>
            <li> Tooth cleaning</li>
             <li>Root Canal Therapy</li>
            <li>Implants</li>
            <li>Composite Bonding</li>
            <li>Fissure Sealants</li>
            <li>Surgical Extractions</li>
           </ul>
          </div>
          {/* awards items all list menu all docuemts */}
          <div>
          <h1 className='text-xl font-semibold my-3'>Awards</h1>
          <h3 className='text-xl'> July 2019</h3>
          <ul className='list-disc'>
            <li>Humanitarian Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>March 2011</h3>
          <ul className='list-disc'>
            <li>Certificate for International Volunteer Service</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>May 2008</h3>
          <ul className='list-disc'>
            <li>The Dental Professional of The Year Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          
          <h1 className='text-xl my-2 font-semibold'>Specializations</h1>
          <ul className='list-disc'>
            <li> Children Care</li>
             <li>Dental Care</li>
            <li>Oral and Maxillofacial Surgery</li>
            <li>Orthodontist</li>
            <li>Periodontist</li>
            <li>Prosthodontics</li>
           </ul>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className='my-4'>
        <h1 className='text-2xl lg:text-3xl font-semibold'>About Me -demo 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='grid my-3 grid-cols-1 md:grid-cols-2'>
          <div>
          <h1 className='text-xl font-semibold my-3'>Education</h1>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>BDS</li>
                  <li>1998 - 2003</li>
               </ul>
           </ul>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>MDS</li>
                  <li> 2003 - 2005</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Work & Experience</h1>
           <ul className='list-disc'>
            <li>Glowing Smiles Family Dental Clinic</li>
               <ul>
                  <li>2010 - Present (5 years)</li>
               </ul>
               <li>Comfort Care Dental Clinic</li>
               <ul>
                  <li>2007 - 2010 (3 years)</li>
               </ul>
               <li>Dream Smile Dental Practice</li>
               <ul>
                  <li>2005 - 2007 (2 years)</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Services</h1>
           <ul className='list-disc'>
            <li> Tooth cleaning</li>
             <li>Root Canal Therapy</li>
            <li>Implants</li>
            <li>Composite Bonding</li>
            <li>Fissure Sealants</li>
            <li>Surgical Extractions</li>
           </ul>
          </div>
          {/* awards items all list menu all docuemts */}
          <div>
          <h1 className='text-xl font-semibold my-3'>Awards</h1>
          <h3 className='text-xl'> July 2019</h3>
          <ul className='list-disc'>
            <li>Humanitarian Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>March 2011</h3>
          <ul className='list-disc'>
            <li>Certificate for International Volunteer Service</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>May 2008</h3>
          <ul className='list-disc'>
            <li>The Dental Professional of The Year Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          
          <h1 className='text-xl my-2 font-semibold'>Specializations</h1>
          <ul className='list-disc'>
            <li> Children Care</li>
             <li>Dental Care</li>
            <li>Oral and Maxillofacial Surgery</li>
            <li>Orthodontist</li>
            <li>Periodontist</li>
            <li>Prosthodontics</li>
           </ul>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className='my-4'>
        <h1 className='text-2xl lg:text-3xl font-semibold'>About Me -demo 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='grid my-3 grid-cols-1 md:grid-cols-2'>
          <div>
          <h1 className='text-xl font-semibold my-3'>Education</h1>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>BDS</li>
                  <li>1998 - 2003</li>
               </ul>
           </ul>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>MDS</li>
                  <li> 2003 - 2005</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Work & Experience</h1>
           <ul className='list-disc'>
            <li>Glowing Smiles Family Dental Clinic</li>
               <ul>
                  <li>2010 - Present (5 years)</li>
               </ul>
               <li>Comfort Care Dental Clinic</li>
               <ul>
                  <li>2007 - 2010 (3 years)</li>
               </ul>
               <li>Dream Smile Dental Practice</li>
               <ul>
                  <li>2005 - 2007 (2 years)</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Services</h1>
           <ul className='list-disc'>
            <li> Tooth cleaning</li>
             <li>Root Canal Therapy</li>
            <li>Implants</li>
            <li>Composite Bonding</li>
            <li>Fissure Sealants</li>
            <li>Surgical Extractions</li>
           </ul>
          </div>
          {/* awards items all list menu all docuemts */}
          <div>
          <h1 className='text-xl font-semibold my-3'>Awards</h1>
          <h3 className='text-xl'> July 2019</h3>
          <ul className='list-disc'>
            <li>Humanitarian Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>March 2011</h3>
          <ul className='list-disc'>
            <li>Certificate for International Volunteer Service</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>May 2008</h3>
          <ul className='list-disc'>
            <li>The Dental Professional of The Year Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          
          <h1 className='text-xl my-2 font-semibold'>Specializations</h1>
          <ul className='list-disc'>
            <li> Children Care</li>
             <li>Dental Care</li>
            <li>Oral and Maxillofacial Surgery</li>
            <li>Orthodontist</li>
            <li>Periodontist</li>
            <li>Prosthodontics</li>
           </ul>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <div className='my-4'>
        <h1 className='text-2xl lg:text-3xl font-semibold'>About Me -demo 5</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='grid my-3 grid-cols-1 md:grid-cols-2'>
          <div>
          <h1 className='text-xl font-semibold my-3'>Education</h1>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>BDS</li>
                  <li>1998 - 2003</li>
               </ul>
           </ul>
           <ul className='list-disc'>
            <li>American Dental Medical University</li>
               <ul>
                  <li>MDS</li>
                  <li> 2003 - 2005</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Work & Experience</h1>
           <ul className='list-disc'>
            <li>Glowing Smiles Family Dental Clinic</li>
               <ul>
                  <li>2010 - Present (5 years)</li>
               </ul>
               <li>Comfort Care Dental Clinic</li>
               <ul>
                  <li>2007 - 2010 (3 years)</li>
               </ul>
               <li>Dream Smile Dental Practice</li>
               <ul>
                  <li>2005 - 2007 (2 years)</li>
               </ul>
           </ul>
           <h1 className='text-xl my-2 font-semibold'>Services</h1>
           <ul className='list-disc'>
            <li> Tooth cleaning</li>
             <li>Root Canal Therapy</li>
            <li>Implants</li>
            <li>Composite Bonding</li>
            <li>Fissure Sealants</li>
            <li>Surgical Extractions</li>
           </ul>
          </div>
          {/* awards items all list menu all docuemts */}
          <div>
          <h1 className='text-xl font-semibold my-3'>Awards</h1>
          <h3 className='text-xl'> July 2019</h3>
          <ul className='list-disc'>
            <li>Humanitarian Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>March 2011</h3>
          <ul className='list-disc'>
            <li>Certificate for International Volunteer Service</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          <h3 className='text-xl'>May 2008</h3>
          <ul className='list-disc'>
            <li>The Dental Professional of The Year Award</li>
            <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </ul>
          
          <h1 className='text-xl my-2 font-semibold'>Specializations</h1>
          <ul className='list-disc'>
            <li> Children Care</li>
             <li>Dental Care</li>
            <li>Oral and Maxillofacial Surgery</li>
            <li>Orthodontist</li>
            <li>Periodontist</li>
            <li>Prosthodontics</li>
           </ul>
          </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default About;
