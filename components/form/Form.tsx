'use client';

import React, { useReducer, useActionState } from 'react';
import {
  User,
  Building2,
  MapPin,
  Wrench,
  FileText,
  CheckCircle2,
  Globe,
  Lock,
  Mail,
  Phone,
  Info,
  Plus,
  ArrowRight,
  Loader2,
} from 'lucide-react';

// --- TYPES & REDUCER ---
interface FormFields {
  companyName: string;
  businessType: string;
  yearEstablished: string;
  website: string;
  taxId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  preferredContact: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  serviceRadius: string;
  primaryState: string;
  additionalStates: string;
  services: string[];
  otherService: string;
}

interface FormState {
  currentStep: number;
  formData: FormFields;
}

type Action =
  | { type: 'SET_FIELD'; field: keyof FormFields; value: string }
  | { type: 'TOGGLE_SERVICE'; service: string }
  | { type: 'SET_STEP'; step: number };

const ALL_SERVICES = [
  'Pipe Bursting',
  'Horizontal Directional Drilling',
  'Pipe Lining',
  'CIPP',
  'Sewer Rehabilitation',
  'Water Line Installation',
  'Utility Installation',
  'Hydro Excavation',
  'Emergency Services',
  'Manhole Rehabilitation',
];

const initialFormState: FormState = {
  currentStep: 0,
  formData: {
    companyName: '',
    businessType: '',
    yearEstablished: '',
    website: '',
    taxId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    preferredContact: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    serviceRadius: '',
    primaryState: '',
    additionalStates: '',
    services: ['Pipe Bursting', 'Horizontal Directional Drilling', 'Pipe Lining', 'CIPP'],
    otherService: '',
  },
};

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };
    case 'TOGGLE_SERVICE': {
      const exists = state.formData.services.includes(action.service);
      const newServices = exists
        ? state.formData.services.filter((s) => s !== action.service)
        : [...state.formData.services, action.service];
      return {
        ...state,
        formData: { ...state.formData, services: newServices },
      };
    }
    case 'SET_STEP':
      return { ...state, currentStep: action.step };
    default:
      return state;
  }
}

// --- REACT ACTION HANDLER ---
interface ActionResult {
  success?: boolean;
  message?: string;
  error?: string;
}

async function handleContractorSubmit(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  // Simulate backend/API submission delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const data = Object.fromEntries(formData.entries());
  console.log('Submitted Payload:', data);

  return { success: true, message: 'Registration submitted successfully!' };
}

// --- MAIN FORM COMPONENT ---
export default function ContractorRegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const [actionState, formAction, isPending] = useActionState(
    handleContractorSubmit,
    null
  );

  const steps = [
    { label: 'Business Info', icon: Building2 },
    { label: 'Contact', icon: User },
    { label: 'Location', icon: MapPin },
    { label: 'Services', icon: Wrench },
    { label: 'Documents', icon: FileText },
    { label: 'Review', icon: CheckCircle2 },
  ];

  return (
    <form
      action={formAction}
      className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 text-gray-800 font-sans space-y-8"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
          <User className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Contractor Registration</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            All fields marked with <span className="text-orange-500 font-bold">*</span> are required
          </p>
        </div>
      </div>

      {/* Steps Navigation Bar */}
      <div className="border-b border-gray-100 pb-3 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[580px] gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = state.currentStep === index;
            return (
              <button
                key={step.label}
                type="button"
                onClick={() => dispatch({ type: 'SET_STEP', step: index })}
                className={`flex flex-col items-center gap-1.5 pb-2 border-b-2 text-xs font-medium transition-all ${
                  isActive
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hidden inputs to pass services array to FormData */}
      {state.formData.services.map((svc) => (
        <input key={svc} type="hidden" name="services" value={svc} />
      ))}

      {/* SECTION 1: Business Information */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-gray-900">Business Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Company Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={state.formData.companyName}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'companyName', value: e.target.value })}
              placeholder="Enter company name"
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>

          <div className="md:col-span-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Business Type <span className="text-orange-500">*</span>
            </label>
            <select
              name="businessType"
              value={state.formData.businessType}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'businessType', value: e.target.value })}
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            >
              <option value="">Select business type</option>
              <option value="llc">LLC</option>
              <option value="corporation">Corporation</option>
              <option value="sole_proprietorship">Sole Proprietorship</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Year Established</label>
            <input
              type="text"
              name="yearEstablished"
              value={state.formData.yearEstablished}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'yearEstablished', value: e.target.value })}
              placeholder="YYYY"
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Website</label>
            <div className="relative">
              <Globe className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="website"
                value={state.formData.website}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'website', value: e.target.value })}
                placeholder="https://yourcompany.com"
                className="w-full rounded-lg border border-gray-200 pl-9 pr-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Tax ID / EIN</label>
            <div className="relative">
              <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="taxId"
                value={state.formData.taxId}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'taxId', value: e.target.value })}
                placeholder="12-3456789"
                className="w-full rounded-lg border border-gray-200 pl-9 pr-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Primary Contact */}
      <section className="space-y-4 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-bold text-gray-900">Primary Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              First Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={state.formData.firstName}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'firstName', value: e.target.value })}
              placeholder="First name"
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Last Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={state.formData.lastName}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'lastName', value: e.target.value })}
              placeholder="Last name"
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Email <span className="text-orange-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                name="email"
                value={state.formData.email}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
                placeholder="you@company.com"
                required
                className="w-full rounded-lg border border-gray-200 pl-9 pr-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Phone <span className="text-orange-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                name="phone"
                value={state.formData.phone}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
                placeholder="(555) 123-4567"
                required
                className="w-full rounded-lg border border-gray-200 pl-9 pr-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={state.formData.jobTitle}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'jobTitle', value: e.target.value })}
              placeholder="e.g. Owner, Manager"
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Preferred Contact</label>
            <select
              name="preferredContact"
              value={state.formData.preferredContact}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'preferredContact', value: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            >
              <option value="">Select an option</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
        </div>
      </section>

      {/* SECTION 3: Business Location */}
      <section className="space-y-4 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-bold text-gray-900">Business Location</h3>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Street Address <span className="text-orange-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="streetAddress"
              value={state.formData.streetAddress}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'streetAddress', value: e.target.value })}
              placeholder="123 Main Street"
              required
              className="w-full rounded-lg border border-gray-200 pl-9 pr-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              City <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={state.formData.city}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'city', value: e.target.value })}
              placeholder="City"
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              State <span className="text-orange-500">*</span>
            </label>
            <select
              name="state"
              value={state.formData.state}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'state', value: e.target.value })}
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            >
              <option value="">Select state</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              <option value="NY">New York</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              ZIP Code <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              value={state.formData.zipCode}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'zipCode', value: e.target.value })}
              placeholder="ZIP code"
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-800 placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: Service Area */}
      <section className="space-y-4 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-bold text-gray-900">Service Area</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Service Radius <span className="text-orange-500">*</span>
            </label>
            <select
              name="serviceRadius"
              value={state.formData.serviceRadius}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'serviceRadius', value: e.target.value })}
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            >
              <option value="">Select radius</option>
              <option value="25">25 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100+ miles</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Primary State <span className="text-orange-500">*</span>
            </label>
            <select
              name="primaryState"
              value={state.formData.primaryState}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'primaryState', value: e.target.value })}
              required
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            >
              <option value="">Select state</option>
              <option value="TX">Texas</option>
              <option value="CA">California</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Additional States</label>
            <select
              name="additionalStates"
              value={state.formData.additionalStates}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'additionalStates', value: e.target.value })}
              className="w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-xs text-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none bg-gray-50/30"
            >
              <option value="">Select states</option>
              <option value="OK">Oklahoma</option>
              <option value="LA">Louisiana</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-blue-50/60 border border-blue-100 rounded-xl p-3 text-xs text-blue-600">
          <Info className="w-4 h-4 shrink-0" />
          <span>You can select multiple states where you provide services.</span>
        </div>
      </section>

      {/* SECTION 5: Services Offered */}
      <section className="space-y-4 pt-4 border-t border-gray-100">
        <h3 className="text-sm font-bold text-gray-900">Services Offered</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ALL_SERVICES.map((serviceName) => {
            const isChecked = state.formData.services.includes(serviceName);
            return (
              <label
                key={serviceName}
                onClick={() => dispatch({ type: 'TOGGLE_SERVICE', service: serviceName })}
                className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors cursor-pointer select-none"
              >
                <span className="text-xs font-medium text-gray-700">{serviceName}</span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}} // handled by parent label onClick action
                  className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 accent-orange-500"
                />
              </label>
            );
          })}

          <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-white">
            <span className="text-xs font-medium text-gray-500 shrink-0 mr-2">Other (Please specify)</span>
            <input
              type="text"
              name="otherService"
              value={state.formData.otherService}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'otherService', value: e.target.value })}
              placeholder="Enter other service"
              className="w-full text-xs text-gray-800 placeholder-gray-400 outline-none bg-transparent text-right"
            />
          </div>
        </div>

        <button
          type="button"
          className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add more services</span>
        </button>
      </section>

      {/* Submission Feedback Message */}
      {actionState?.success && (
        <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-xs rounded-xl">
          {actionState.message}
        </div>
      )}

      {/* Action Footer */}
      <div className="pt-4 border-t border-gray-100 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors"
          >
            Save Draft
          </button>
          
          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Continue to Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Security Note */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
          <Lock className="w-3.5 h-3.5 shrink-0" />
          <span>Your information is secure and will only be used to verify your business and connect you with potential customers.</span>
        </div>
      </div>
    </form>
  );
}