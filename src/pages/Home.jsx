import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="">
            <div className="hero min-h-screen bg-sky-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.postimg.cc/5th9FBQz/banner-bg.png" alt="banner-bg.png" className="" />
    <div className="">
      <h1 className="text-5xl font-bold">Employee Attendance Management System</h1>
      <p className="py-6">Empower Your Workforce, Elevate Efficiency: Seamless Attendance Management, Smarter Business Solutions.</p>
      <Link to='/dataVisual'><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
<section className="bg-sky-200 py-8">
    <h2 className="text-5xl text-center font-semibold py-4">Our Services</h2>
    <div className="flex flex-col gap-4 flex-wrap md:flex-row md:justify-center items-center md:gap-6 mx-4">
    {/* service 1 */}
    <div className="card card-compact md:w-96 h-[400px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/100/external-data-processing-data-analytics-and-statistics-smashingstocks-mixed-smashing-stocks.png" alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Data Processing</h2>
    <p>You can create accounts, log in, and reset passwords. Administrators have additional privileges for user management.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Get Service</button>
    </div>
  </div>
</div>
{/* service 2 */}
<div className="card card-compact md:w-96 h-[400px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.icons8.com/external-outline-black-m-oki-orlando/100/external-data-visualization-data-engineering-outline-outline-black-m-oki-orlando.png" alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Data Visualization</h2>
    <p>You can select from a range of data visualization options, including bar charts, line graphs, and pie charts, for viewing attendance data over specified timeframes.</p>
    <div className="card-actions">
      <Link to='/dataVisual'><button className="btn btn-primary">Get Service</button></Link> 
    </div>
  </div>
</div>
{/* service 3 */}
<div className="card card-compact md:w-96 h-[400px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.icons8.com/external-phatplus-lineal-phatplus/64/external-export-online-courses-phatplus-lineal-phatplus.png" alt="Shoes" className="rounded-xl w-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Data Export</h2>
    <p>You can export visualized data in PDF, PNG, or CSV formats for further analysis and reporting.</p>
    <div className="card-actions">
      <button className="btn btn-primary">Get Service</button>
    </div>
  </div>
</div>
    </div>
</section>
        </div>
    );
};

export default Home;