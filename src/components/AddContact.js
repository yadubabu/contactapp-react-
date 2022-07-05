import React from "react";

class AddContact extends React.Component{
    state={
        name:'',
        email:''
    };

    add=(e)=>{
        e.preventDefault();
    //    if(this.state.name === '' || this.state.email ===''){
    //         alert('Fields are Mandatory');
    //         return
    //     } 
        this.props.addContactHandler(this.state);
        console.log(this.state)
    }
    render(){
        return(
           <div className="ui main"> 
                <center><h3>Add Contact</h3></center>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name:</label>
                        <input type='text' name='name'
                        placeholder='Name' 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        <input type='text' name='email' 
                        placeholder='Email'
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                    <button className="ui button primary">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;