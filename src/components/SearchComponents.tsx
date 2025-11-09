"use client";

export const SearchContainer = ({
  searchTerm,
  onResetSearch,
  onChange,
  onSelectFilter,
}) => (
  <div className="pt-10 pb-10 pl-10 bg-blue-100 w-300">
    <h2 className="mb-2">Search</h2>

    <input
      className="border-1 border-solid border p-3"
      onChange={(e) => onChange(e.target.value)}
      type="text"
      value={searchTerm}
      autoFocus
    />
    <select
      onChange={onSelectFilter}
      className="border-1 border-solid border p-3 ml-5"
      name="filterName"
    >
      <option value="firstName">First Name</option>
      <option value="lastName">Last Name</option>
      <option value="city">City</option>
      <option value="degree">Degree</option>
      <option value="specialties">Specialties</option>
      <option value="yearsOfExperience">Years of Experience</option>
      <option value="phoneNumber">Phone Number</option>
    </select>
    <button
      className="border-1 border-solid border p-3 ml-5 bg-gray-100"
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
    <table className="table-auto w-full text-left  min-w-max pl-10">
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
