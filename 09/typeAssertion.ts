const rowData = '["grace", "frankie"]';

JSON.parse(rowData); // 타입 any
JSON.parse(rowData) as string[]; // 타입 string[]
JSON.parse(rowData) as [string, string]; // 타입 [string, string]
JSON.parse(rowData) as ["grace", "frankie"]; // 타입 ["grace", "frankie"]
