type Props = {
    children: string
    setFile: (value: React.SetStateAction<string | Blob>) => void
}

const UploadImage = ({children, setFile}: Props) => {
    return (
        <>
           <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile((e.target as HTMLInputElement).files![0])}
          />
          <label className="file" htmlFor="file">
            {children}
          </label>
        </>
    );
};

export default UploadImage;