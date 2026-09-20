import {Link} from 'react-router';

const Start = () => {
    return ( 
        <>
              <div>
          <div className="relative h-screen overflow-hidden bg-linear-to-br from-purple-950 via-purple-800 to-pink-700">
            {/* Moving background circles */}
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl animate-pulse"></div>

            <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl animate-pulse"></div>

            <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>

            {/* Small floating circles */}
            <div className="absolute top-20 left-1/4 h-4 w-4 rounded-full bg-white/40 animate-bounce"></div>

            <div className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-white/30 animate-ping"></div>

            <div className="absolute bottom-1/4 left-1/4 h-5 w-5 rounded-full bg-pink-300/40 animate-bounce"></div>

            {/* Main content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
              <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
                <div className="mb-5 text-6xl">📝</div>

                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Welcome to your
                  <span className="block text-pink-200">ToDo-List App</span>
                </h1>

                <p className="mx-auto mb-8 max-w-md text-white/70">
                  Organize your tasks, stay focused, and get things done.
                </p>

                <Link to="/Homepage">
                  <button className="mt-2.5 cursor-pointer rounded-full bg-white px-10 py-3 font-semibold text-purple-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95">
                    Get Started →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </>
     );
}
 
export default Start;