import { useState } from "react";
import { decryptText, encryptText } from "../Crypto";

export const Encryptor = () => {
    const [raw, setRaw] = useState("");
    const [key, setKey] = useState("");
    const [result, setResult] = useState("");

    const handleRawChange = (e) => {
        setRaw(e.target.value);
    };

    const handleKeyChange = (e) => {
        setKey(e.target.value);
    };

    const handleEncrypt = () => {
        const res = encryptText(raw, key);
        setResult(res);
    };

    const handleDecrypt = () => {
        const res = decryptText(raw, key);
        setResult(res);
    };

    return (
        <div className="container">
            <div class="mb-3">
                <label for="noteInput" class="form-label">
                    Note
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="noteInput"
                    placeholder="input note to be proceed..."
                    value={raw}
                    onChange={handleRawChange}
                />
            </div>
            <div class="mb-3">
                <label for="keyInput" class="form-label">
                    Key
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="keyInput"
                    value={key}
                    onChange={handleKeyChange}
                />
            </div>
            <div className="mb-3 d-flex flex-row justify-content-between">
                <button className="btn btn-primary" onClick={handleEncrypt}>
                    Encrypt
                </button>
                <button className="btn btn-success" onClick={handleDecrypt}>
                    Decrypt
                </button>
            </div>
            <div class="bg-body-tertiary text-wrap text-break">
                {result}
            </div>
        </div>
    );
};
