"use client";

export const SearchContainer = ({ searchTerm, onResetSearch, onChange }) => (
  <div className="pt-10 pb-10">
    <h2 className="mb-2">Search</h2>

    <input
      className="border-1 border-solid border p-3"
      onChange={onChange}
      type="text"
      value={searchTerm}
      autoFocus
    />
    <button
      className="border-1 border-solid border p-3 ml-5"
      onClick={onResetSearch}
    >
      Reset Search
    </button>
  </div>
);

export const SearchRow = ({ advocate }) => (
  <tr>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.firstName}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.lastName}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.city}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.degree}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <ul className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.specialties.map((s, i) => (
          <li
            key={`specialty-${i}`}
            className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900"
          >
            {s}
          </li>
        ))}
      </ul>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.yearsOfExperience}
      </p>
    </td>
    <td className="p-4 border-b border-blue-gray-50">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        {advocate.phoneNumber}
      </p>
    </td>
  </tr>
);

export const SearchTable = ({ filteredAdvocates }) => {
  return (
    <table className="table-auto w-full text-left  min-w-max">
      <thead>
        <tr>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              First Name
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Last Name
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              City
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Degree
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Specialties
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Years of Experience
            </p>
          </th>
          <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              Phone Number
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredAdvocates.map((advocate, idx) => (
          <SearchRow advocate={advocate} key={`table-row-${idx}`} />
        ))}
      </tbody>
    </table>
  );
};
