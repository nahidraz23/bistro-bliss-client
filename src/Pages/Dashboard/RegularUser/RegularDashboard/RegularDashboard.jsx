import useAuth from "../../../../hooks/useAuth";

const RegularDashboard = () => {

    const { user } = useAuth();

    return (
        <div>
            <div>
                <h1 className="uppercase text-left p-10 text-2xl">hi, welcome {user? user?.displayName : "Back"}!</h1>
            </div>
        </div>
    );
};

export default RegularDashboard;