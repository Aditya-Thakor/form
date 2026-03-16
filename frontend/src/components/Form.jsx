import { useState } from "react"

export default function Form() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const formdata = new FormData();
   
  const handleForm = async()=>{
    console.log(username);
    console.log(password);  

    formdata.append('username', username);
    formdata.append('password', password);

    
    const post = await fetch('https://symmetrical-space-system-v6rpj49g5vj7f9xg-5200.app.github.dev/login', {
      method:'post',
      body: formdata
    })

    const data = await post.text();

    console.log(data);   
    
  }

  return (

    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="username" class="block mb-2.5 text-sm font-medium text-heading">Your username</label>
        <input 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          type="text" id="username" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="enter username" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Your password</label>
        <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
           type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
      </div>
      
      <button type="button" 
        onClick={handleForm}
       class="bg-blue-500 bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
    </form>

  )
}