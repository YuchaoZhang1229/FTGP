import CustomContainer from "./CustomContainer";

export default function Profile() {
    // user name 
    // 
    return (
        <CustomContainer>
            <div className="flex flex-col space-y-5 ">
                <div id="accountLabel">Account: </div>
                <div >Balance: </div>
                <div >Transaction: </div>
            </div>

        </CustomContainer>

    )
}