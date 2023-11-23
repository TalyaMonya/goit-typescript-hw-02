/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Obj {
  title: string
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Obj> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};