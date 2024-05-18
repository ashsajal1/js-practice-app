import Message from "../components/ui/message";

export default function Interview() {
    const fullQuestion = 'This is message from interviewer';

    return (
        <div className="p-4">
            <div className="flex items-start gap-2 justify-start">
                <div className="w-[40px] h-[40px] rounded-full bg-black"></div>
                <Message text={fullQuestion} />
            </div>
        </div>
    );
}
