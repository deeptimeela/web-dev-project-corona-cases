import React,{useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalState'
import AnimatedNumber from '@jhonnold/react-animated-number';
import {
  LineChart, Line} from 'recharts';
var data = [
  ]

export const Confirmed = (props) => {
  const {statedata,stateentered}=useContext(GlobalContext)
  var i=0
  data=[...statedata].reverse().map(ele=>{
    if(i%2==0)
    {
    for(var key in ele.States[stateentered].total)
    {
      if(key=='confirmed')
      {
      return {pv:parseInt( ele.States[stateentered].total[key])}
      }
    }
  }
  i++
  })
  function datagather1()
  {
    for(var key in statedata[0].States[stateentered].total)
    {
      if(key=='confirmed')
      {
      return parseInt( statedata[0].States[stateentered].total[key])
      }
    }
  }
  function datagather2()
  {
    for(var key in statedata[1].States[stateentered].total)
    {
      if(key=='confirmed')
      {
      return parseInt(statedata[1].States[stateentered].total[key])
      }
    }
  }
  var newdateconfirmed=datagather1()
  var olddateconfirmed=datagather2()
    return (
        <div id="Confirmed">
          <div id="confirmed-text"><h2 style={{color:'#E61C1C'}}>Confirmed</h2></div>
          <div><h4 style={{color:'#E61C1C'}}>↑ {(newdateconfirmed-olddateconfirmed).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4></div>
          <div><h1  style={{color:'#E61C1C'}}>{newdateconfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1></div>
            <LineChart width={200} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#db0000" strokeWidth={2} dot={false} />
      </LineChart>
        </div>
    )
}




