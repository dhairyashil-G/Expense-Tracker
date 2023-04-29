
const simpleFooter = () => {

  return (

    <footer className="relative bg-blueGray-200 pt-4 pb-4 bg-[#0068df]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-4/12 px-4">

            <h5 className="text-2xl mt-0 mb-0 text-white">
              Transform your spending habits and reach your financial goals - start tracking today.
            </h5>
            <h4 className="text-3xl fonat-semibold text-white">SignUp Now!</h4>
            <p className="text-white mt-2">&copy; 2023 ExpenseTracker. All rights reserved.</p>

          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-3">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white font-bold mb-2 text-2xl">Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 text-white font-semibold block pb-2 text-xl" href="#">Home</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 text-white font-semibold block pb-2 text-xl" href="#">Signup</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white font-bold mb-2 text-2xl">Contact Us</span>
                <p class="mt-2 text-xl text-white">123 Main Street, City</p>
                <p className="mt-2 text-xl text-white">12345 State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


  )
}

export default simpleFooter