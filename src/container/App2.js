import React,{Component} from 'react';
import CardList from '../component/cardList';
import SearchBox from '../component/searchBox';
import Scroll from '../component/scrolls';
import './app2.css'
class App2 extends Component {
    constructor(){
        super()
        this.state ={
            robots:[],
            searchfield:""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            return res.json();
        }).then(users =>{
            this.setState({robots:users})
        })
    }
    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value})
    }
    render(){
        const {robots,searchfield} = this.state ;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
          })
          if(this.state.robots.length ===0){
              return <h1>Loading</h1>
          }else{
            return(
                <div className="tc">
                    <h1>Robo friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robot = {filteredRobots}/>
                    </Scroll>
                </div>
                
            );
          }
}
} 
export default App2;