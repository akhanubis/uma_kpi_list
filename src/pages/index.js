import React, { useEffect, useState } from "react"

const HUMANIZED_SOURCE = {
  users: 'voting with UMA or being a sponsor',
  holders: 'holding at least 10 UMA',
  gov_voters: 'voting in Yearn, Yam, Sushi, BadgerDAO, or Balancer'
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [sources, setSources] = useState({})
  const [address, setAddress] = useState('')
  const [searchAddress, setSearchAddress] = useState('')
  const [searchResult, setSearchResult] = useState({})

  useEffect(_ => {
    const fetch_jsons = async _ => {
      const [users, holders, gov_voters] = await Promise.all([
        fetch('https://raw.githubusercontent.com/UMAprotocol/token-distribution/master/outputs/uma_user_recipients.json').then(r => r.json()),
        fetch('https://raw.githubusercontent.com/UMAprotocol/token-distribution/master/outputs/uma_holder_recipients.json').then(r => r.json()),
        fetch('https://raw.githubusercontent.com/UMAprotocol/token-distribution/master/outputs/governance_recipients.json').then(r => r.json())
      ])

      console.log(users)
      setSources({
        users,
        holders,
        gov_voters
      })

      setLoading(false)
    }
    fetch_jsons()
  }, [])

  const search = a => {
    console.log("SERACHING")
    console.log(a)
    
    const out = {}
    for (const s in sources)
      out[s] = sources[s][address] || 0
    setSearchAddress(address)
    setSearchResult(out)
  }

  const handleAddress = e => {
    setAddress((e.target.value || '').toLowerCase())
  }

  const renderResult = _ => {
    const total = Object.values(searchResult).reduce((out, v) => out + v, 0)
    if (!total)
      return
    return (
      <div>
        <div>
          {Object.values(searchResult).reduce((out, v) => out + v, 0)} KPI for address {searchAddress}
        </div>
        <hr/>
        {Object.entries(searchResult).map(([s, v]) => {
          return <div key={s}>
            {v} KPI for {HUMANIZED_SOURCE[s]}
          </div>
        })}
      </div>
    )
  }

  if (loading)
    return "LOADING..."
  
  return (
    <div>
      <h1>KPI Airdrop Eligibility</h1>
      <input type="text" onChange={handleAddress} placeholder="Enter your address" style={{width: '320px'}}></input>
      <input type="button" onClick={search} value="Check KPI eligibility"></input>
      
      <br/>
      <br/>

      {renderResult()}
    </div>
  )
}
