export function NavigationBar() {
  return (
    <div className="flex items-center  px-4 pt-10  w-1/2 ">
      <div className="flex space-x-8">
        <h1 className="text-4xl font-bold " style={{fontFamily:"IstokWeb-Bold"}}>@amalxprasad</h1>
        <div className="flex items-center space-x-8" style={{fontFamily:"IstokWeb-Regular"}}>
          <p className="">Works</p>
          <p className="">Contact</p>
        </div>
      </div>
    </div>
  );
}
