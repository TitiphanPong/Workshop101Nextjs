"use client";

import {useState} from "react";

export default function StateSection() {
	// ประกาศ state ชื่อ count โดยตั้งค่าเริ่มต้นเป็น 0
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	);
}

			// <button onClick={() => setCount(0)}>Reset</button>
			// <button onClick={() => setCount(count - 1)}>-1</button>
            // <button onClick={() => setCount(count * 2)}>x2</button>
                // <button onClick={() => count < 5 && setCount(count + 1)}>+1</button>
                // <button onClick={() => count > -5 && setCount(count - 1)}>-1</button>