"use client"
import { handleContractorRegistration } from '@/app/actions';
import { useActionState } from 'react';



export default function ContractorRegistrationForm() {
    const [state, formAction, isPending] = useActionState(
    handleContractorRegistration,
    null
  );

  console.log(state)
  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white border border-slate-200 rounded-xl shadow-sm font-sans text-slate-800">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Contractor Registration
      </h1>

      <form action={formAction} className="space-y-6">
        {/* Company Legal Name */}
        <div>
          <label htmlFor="company_name" className="block text-sm font-medium mb-1">
            Company's Legal Name
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Representative Name (First & Last) */}
        <fieldset>
          <legend className="block text-sm font-medium mb-2">
            Name of Company Representative <span className="text-red-500">*</span>
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <label htmlFor="first_name" className="block text-xs text-slate-500 mt-1">
                First
              </label>
            </div>
            <div>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <label htmlFor="last_name" className="block text-xs text-slate-500 mt-1">
                Last
              </label>
            </div>
          </div>
        </fieldset>

        {/* Representative Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rep_email" className="block text-sm font-medium mb-1">
              Representative's Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="rep_email"
              name="rep_email"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <p className="text-xs text-slate-500 mt-1">For account use only.</p>
          </div>

          <div>
            <label htmlFor="rep_phone" className="block text-sm font-medium mb-1">
              Representative's Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="rep_phone"
              name="rep_phone"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <p className="text-xs text-slate-500 mt-1">Best number for contact.</p>
          </div>
        </div>

        {/* Company Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company_email" className="block text-sm font-medium mb-1">
              Company Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="company_email"
              name="company_email"
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label htmlFor="company_phone" className="block text-sm font-medium mb-1">
              Company Phone Number
            </label>
            <input
              type="tel"
              id="company_phone"
              name="company_phone"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Company Website */}
        <div>
          <label htmlFor="company_website" className="block text-sm font-medium mb-1">
            Company Website
          </label>
          <input
            type="url"
            id="company_website"
            name="company_website"
            placeholder="https://"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Services Checklist */}
        <fieldset>
          <legend className="block text-sm font-medium mb-2">
            Services Provided <span className="text-red-500">*</span>
          </legend>
          <div className="space-y-2 bg-slate-50 p-4 rounded-md border border-slate-200">
            {[
              { id: 'pipelining', label: 'PipeLining (mandatory)' },
              { id: 'drain_cleaning', label: 'Drain Cleaning' },
              { id: 'trenchless', label: 'Other Trenchless Rehab Methods' },
              { id: 'general_plumbing', label: 'General Plumbing/Replacement' },
            ].map((service) => (
              <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="services"
                  value={service.id}
                  className="h-4 w-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-700">{service.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Address Details */}
        <fieldset className="space-y-4">
          <legend className="block text-sm font-medium border-b pb-1 border-slate-200 w-full">
            Company Address
          </legend>

          <div>
            <input
              type="text"
              id="street_1"
              name="street_1"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <label htmlFor="street_1" className="block text-xs text-slate-500 mt-1">
              Street Address
            </label>
          </div>

          <div>
            <input
              type="text"
              id="street_2"
              name="street_2"
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <label htmlFor="street_2" className="block text-xs text-slate-500 mt-1">
              Address Line 2
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <label htmlFor="city" className="block text-xs text-slate-500 mt-1">
                City
              </label>
            </div>
            <div>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <label htmlFor="state" className="block text-xs text-slate-500 mt-1">
                State / Region
              </label>
            </div>
            <div>
              <input
                type="text"
                id="zip"
                name="zip"
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <label htmlFor="zip" className="block text-xs text-slate-500 mt-1">
                ZIP Code
              </label>
            </div>
          </div>
        </fieldset>

        {/* Textareas */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium mb-1">
            Short Company Bio <span className="text-red-500">*</span>
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-y"
          />
        </div>

        <div>
          <label htmlFor="areas_serviced" className="block text-sm font-medium mb-1">
            Areas Serviced
          </label>
          <textarea
            id="areas_serviced"
            name="areas_serviced"
            rows={3}
            placeholder="State, city, or county..."
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-y"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}