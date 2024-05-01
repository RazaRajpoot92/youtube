import Button from "./Button";

const ButtonList = ()=>{

    const buttonNames = ["All", "Music","Coding","Wrestling","Movies","History","Cool","Jokes"]


    return(
        <div className="w-full h-14 flex items-center p-4  ">
            {
                buttonNames.map((name)=>(
                    <Button key={name} name={name} />
                ))
            }
        </div>
    )
}

export default ButtonList;