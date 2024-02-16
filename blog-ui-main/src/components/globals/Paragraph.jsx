export function Paragraph({text,size='18px',orientation='center'}) {
    return (
        <>
            <p style={{'font-size':size,'text-align': orientation}}>
                {text}
            </p>
        </>
    );
}