
const AddCoffee = () => {
    return (
        <div>
            <h2>Add A Coffee</h2>
            <form>
                <div className="flex">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="" id="" placeholder="Coffee Name" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="" id="" placeholder="Available Quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;