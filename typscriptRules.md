# Typescript rules

Version React 18

# React.FC and PropsWithChildren

If FC dont have children use React.FC 

```bash

- Dont have props
const App: React.FC =() => {<div>some text</div>}
<App/>

-Have props
type SomeProps = {
  noChildren?:boolean
}
const App: React.FC<SomeProps> =() => {<div>some text</div>}
<App noChildren={false}/>

```

If FC have children use React.FC  with PropsWithChildren

```bash
type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

- Dont have props
const App:  React.FC<React.PropsWithChildren<unknown>> =() => {<div>some text</div>}
const App:  React.FC<React.PropsWithChildren<Record<never, any>>> =() => {<div>some text</div>}
<App/><>have children</></App>

-Have props
type SomeProps = {
  noChildren?:boolean
}
const App:  React.FC<React.PropsWithChildren<SomeProps>> =() => {<div>some text</div>}
<App noChildren={true}/> <>have children</></App>
<App noChildren={true}/>
Both are valid because children?  is optional

```