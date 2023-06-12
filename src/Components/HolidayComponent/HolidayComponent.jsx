import React, { Component } from 'react'
import axios from 'axios'

export class HolidayComponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            posts:[],
            errorMessage : '',
        }
    }
    componentDidMount(){
        axios
        .get('https://date.nager.at/api/v3/PublicHolidays/2023/AT')
        .then(response => {
            // console.log(response)
            this.setState({posts: response.data})
            console.log(this.state.posts)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retrieving Data'})
        })
    
        // fetch("https://date.nager.at/api/v3/PublicHolidays/2023/AT",{
        //     method : 'GET',
        //     crossDomain : true,
        //     headers : {
        //         'Content-type' : 'application/json',
        //         'Access-Control-Allow-Origin' : '*'
        //     },
        //     // body : JSON.stringify({
                 
        //     // })
        // }
        // )
        // .then((response) => response.json())
        // .then((data)=>{
        //     console.log(data)
        //     this.state.posts = data.data
        // })
    }
  render() {
    const { posts, errorMessage } = this.state
    return (
      <React.Fragment>
        <div className='flex justify-center bg-gray-200  '>
            <div className='gap-3 text-xl m-10 text-white'>
                
                            {posts.length
                                ?posts.map
                                (post=>
                                    <div  className='bg-gray-500 flex  text-3xl rounded-[7px] pb-4 pt-4 pl-4 pr-4 'key={post.id}>
                                        <div className=' pl-6'>
                                                <div className='leading-lo'> 
                                                    <span className='text-[30px] font-bold'> {post.date}</span>
                                                </div>
                                                <div className='leading-lo'> 
                                                    <span className='text-[30px] font-bold'> {post.localName}</span>
                                                </div>
                                                <div className='leading-lo'> 
                                                    <span className='text-[30px] font-bold'> {post.name}</span>
                                                </div>
                                                <div className='leading-lo'> 
                                                    <span className='text-[30px] font-bold'> {post.launchYear}</span>
                                                </div>
                                               
                                        </div>
                                    </div>
                                )
                                
                                :null}
                   
                    {errorMessage ? <div>{errorMessage}</div> : null}
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HolidayComponent