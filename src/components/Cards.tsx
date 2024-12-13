import Card from "./Card";

export default function Cards(){
    return <div className="w-full">
        <div className="max-w-screen-xl flex gap-3 mx-auto py-20">
        <Card key={1} width="small" left={true} />
        <Card key={2} width="large" left={false} />
        </div>
    </div>
}