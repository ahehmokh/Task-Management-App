const Loading = () => {
    return ( 
        <>
             <div className="relative flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-purple-950 via-purple-800 to-pink-700">
          {/* Moving background circles */}
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl animate-pulse"></div>

          <div className="absolute top-1/4 -right-20 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl animate-pulse"></div>

          <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>

          {/* Small floating circles */}
          <div className="absolute top-20 left-1/4 h-4 w-4 rounded-full bg-white/40 animate-bounce"></div>

          <div className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-white/30 animate-ping"></div>

          <div className="absolute bottom-1/4 left-1/4 h-5 w-5 rounded-full bg-pink-300/40 animate-bounce"></div>

          {/* Loading Card */}
          <div className="relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">
            {/* Icon */}
            <div className="mb-6 text-6xl animate-bounce">📝</div>

            {/* Spinner */}
            <div className="mb-6 h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-pink-200"></div>

            {/* Text */}
            <h1 className="mb-2 text-3xl font-bold text-white">Loading...</h1>

            <p className="text-sm text-white/60">Preparing your ToDo-List App</p>

            {/* Loading dots */}
            <div className="mt-6 flex gap-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-pink-200"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-pink-200 [animation-delay:150ms]"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-pink-200 [animation-delay:300ms]"></span>
            </div>
          </div>
        </div>
        </>
     );
}
 
export default Loading;