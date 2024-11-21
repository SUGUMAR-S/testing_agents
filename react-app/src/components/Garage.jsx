import Car from './Car'

function Garage() {
    const brand = 'Tesla'
    const color = 'black'
    return(
        <>
        <h1>Inside from Garage component</h1>
        <Car brand={brand}
             color = {color}
        />
        </>
    );    
}

export default Garage;