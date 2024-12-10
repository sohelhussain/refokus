import Card from "./Card";

export default function Cards(){
    return <div className="w-full">
        <div className="max-w-screen-xl flex gap-3 mx-auto py-20">
        <Card width="small" left={true} />
        <Card width="large" left={false} hover="bg-violet-600" />
        </div>
    </div>
}