
import Business from "./Business";
import Commissions from "./Commissions";


export default function Home() {

    return(
        <>
            <div className='m-5'>
                <h2>About Me</h2>
                <p>
                    Hi friends. This is a site to showcase my diverse portfolio. I like the outdoors, writing, and making art. I like working with people, data, and technology to find community based solutions to public health and environmental problems.
                </p>
            </div>
            
            <div className='m-5'>
                <p>A question I have is 
                    how to best go about using css styling 
                    to make the forms into their own cards or flex boxes 
                    and make them line up in a row. 
                    I can start by just playing around within the components 
                    and if I find myself duplicating code anywhere, 
                    I can throw it in the index.css folder. 
                    or the layout .css folder?
                    どう違うの?</p>
                <br></br>
                <div className='flex-card'><Business/></div>
                
                <br></br>
                <div className='flex-card'><Commissions/></div>
                
                <br></br>
                <p>
                Here would be a link to the preorder form
                </p>
            </div>
        </>
    )
}