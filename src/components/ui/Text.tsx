const Text = ({children}: {children: string}) => {
    return (
        <p className={"text-[1.7em] text-justify leading-[1.6] tracking-[.2em]"}>
            {children}
        </p>
    );
};

export default Text;