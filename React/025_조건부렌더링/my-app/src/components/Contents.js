import React from 'react';
import '../App.js';

function Contents({listName}){
  if (listName === 'about') {
    return (
      <div>
        about Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat voluptatem sint magnam quam quo quis sed aliquam natus
        odio dolor voluptatibus quaerat cupiditate eos architecto
        ipsam provident repellat, nam doloremque?
      </div>
    )
  } else if (listName === 'product') {
    return (
      <div>
        about Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat voluptatem sint magnam quam quo quis sed aliquam natus
        odio dolor voluptatibus quaerat cupiditate eos architecto
        ipsam provident repellat, nam doloremque?
      </div>
    )
  } else if (listName === 'cart') {
    return (
      <div>
        about Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat voluptatem sint magnam quam quo quis sed aliquam natus
        odio dolor voluptatibus quaerat cupiditate eos architecto
        ipsam provident repellat, nam doloremque?
      </div>
    )
  } else if (listName === 'contact') {
    return (
      <div>
        about Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Placeat voluptatem sint magnam quam quo quis sed aliquam natus
        odio dolor voluptatibus quaerat cupiditate eos architecto
        ipsam provident repellat, nam doloremque?
      </div>
    )
  }
  return (
    <div>404 페이지를 찾을 수 없습니다.</div>
  )
}