export const convertToCSV = (data: any[], headers: { [key: string]: string }) => {
  // Create header row using friendly names
  const headerRow = Object.values(headers).join(',');
  
  // Create data rows
  const rows = data.map(item => {
    return Object.keys(headers)
      .map(key => {
        // Wrap value in quotes and escape existing quotes
        const value = item[key]?.toString().replace(/"/g, '""') || '';
        return `"${value}"`;
      })
      .join(',');
  });
  
  // Combine header and data rows
  return [headerRow, ...rows].join('\n');
};

export const downloadCSV = (csvContent: string, fileName: string) => {
  // Create a blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  
  // Create a link element
  const link = document.createElement('a');
  
  // Create the download URL
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', fileName);
  
  // Append link to body, click it, and remove it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Clean up the URL
  URL.revokeObjectURL(url);
};