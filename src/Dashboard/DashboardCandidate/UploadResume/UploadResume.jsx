import React from 'react';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import useDrivePicker from 'react-google-drive-picker';

const UploadResume = () => {
    const [openPicker] = useDrivePicker();

    const handlePick = (event) => {
        event.preventDefault();
        openPicker({
            clientId: "57004677755-9aqb9ite5uhnth5jjd96ecct3smub21m.apps.googleusercontent.com",
            developerKey: "AIzaSyDfDX1QEt04N7e1NMWH7iiJYZrt7JuMEUM",

            callbackFunction:(data)=>{
                if(data.action === 'cancel'){
                    console.log("user clicked cancel");
                }
                console.log(data);
            }
        });
    };

    return (
        <div className="min-h-screen p-6">
            <DashboardTitle title={"CV Manager!"} slogan={"Ready to jump back in?"} />
            <div className='dark:bg-slate-800 text-white bg-white p-4'>
                <p className='py-10 text-xl'>Cv Manager</p>
                <div className='text-center border-4 hover:border-gray-600 border-dashed h-72 pt-20'>
                    <form onSubmit={handlePick}>
            
                        <button  className='btn bg-primary text-white rounded-md hover:bg-hover px-5 py-2 text-xl' type="submit" > Upload CV </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadResume;
