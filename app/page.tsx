"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Stethoscope, UserCheck, GraduationCap } from "lucide-react"

type Step =
  | "welcome"
  | "categories"
  | "entry-hca"
  | "entry-domestic"
  | "entry-admin"
  | "nursing"
  | "ahp"
  | "medical"
  | "dental"
  | "help-form"

interface UserData {
  email: string
  profession: string
  fullName: string
  address: string
  postCode: string
  mobile: string
  interestedJob: string
  helpNeeded: string
  consent: boolean
}

export default function RefugeePortal() {
  const [currentStep, setCurrentStep] = useState<Step>("welcome")
  const [userData, setUserData] = useState<UserData>({
    email: "",
    profession: "",
    fullName: "",
    address: "",
    postCode: "",
    mobile: "",
    interestedJob: "",
    helpNeeded: "",
    consent: false,
  })

  const updateUserData = (field: keyof UserData, value: string | boolean) => {
    setUserData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 py-12 px-4">
      {currentStep === "welcome" && (
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <img 
                src="/refugee-health-portal-icon.webp" 
                alt="Refugee Health Portal" 
                className="h-16 w-16"
              />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent leading-tight pb-1">
                Refugee Health Jobs Portal
              </h1>
            </div>
          </div>

          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold">Welcome</CardTitle>
              <CardDescription className="text-blue-100 text-xl">
                Find a Job, working in the NHS and Social Care
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What this Portal Offers</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Information and signposting to jobs in Health (NHS) and Social Care
                      </p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <p className="text-gray-700 leading-relaxed">Support and help available to find a job</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <p className="text-gray-800 font-medium">
                      <span className="font-bold text-amber-800">For Refugees</span> living in the UK who wish to work in
                      National Health Service (NHS) or find healthcare jobs.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-base font-semibold text-gray-700">
                        Your email address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={userData.email}
                        onChange={(e) => updateUserData("email", e.target.value)}
                        placeholder="Enter your email address"
                        className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="profession" className="text-base font-semibold text-gray-700">
                        What's your profession
                      </Label>
                      <Input
                        id="profession"
                        value={userData.profession}
                        onChange={(e) => updateUserData("profession", e.target.value)}
                        placeholder="Enter your profession"
                        className="mt-2 h-12 text-base border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => setCurrentStep("categories")}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={!userData.email || !userData.profession}
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "categories" && (
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Choose Your Career Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please choose from the list below which category staff group suits you
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Entry Level Jobs</CardTitle>
                <p className="text-gray-600">Perfect starting point for your NHS career</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-green-500 hover:bg-green-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("entry-hca")}
                  >
                    Health Care Assistants/Support Workers
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-green-500 hover:bg-green-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("entry-domestic")}
                  >
                    Domestics/Porters
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-green-500 hover:bg-green-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("entry-admin")}
                  >
                    Administrators
                  </Button>
                </div>
                <p className="text-sm text-gray-500 text-center pt-2">Working in the NHS and Social Care</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Nurses & Allied Health</CardTitle>
                <p className="text-gray-600">Professional healthcare roles</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-blue-500 hover:bg-blue-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("nursing")}
                  >
                    Nurses
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-blue-500 hover:bg-blue-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("ahp")}
                  >
                    Allied Health Professionals
                  </Button>
                </div>
                <p className="text-sm text-gray-500 text-center pt-2">Registered professionals</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Medical Professionals</CardTitle>
                <p className="text-gray-600">Advanced medical careers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-purple-500 hover:bg-purple-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("medical")}
                  >
                    Doctors
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start h-12 text-left border-2 hover:border-purple-500 hover:bg-purple-50 rounded-xl font-medium"
                    onClick={() => setCurrentStep("dental")}
                  >
                    Dentists
                  </Button>
                </div>
                <p className="text-sm text-gray-500 text-center pt-2">Medical practitioners</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <Button
              onClick={() => setCurrentStep("help-form")}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Need Help? Get Support
            </Button>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setCurrentStep("welcome")}
                className="border-2 border-gray-300 hover:border-gray-400 rounded-xl"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Welcome
              </Button>
            </div>
          </div>
        </div>
      )}

      {currentStep === "entry-hca" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Health Care Assistants/Support Workers</CardTitle>
              <CardDescription>Entry-level healthcare positions in the NHS and Social Care</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Health Care Assistants (HCAs) and Support Workers provide direct care to patients under the supervision 
                  of registered nurses. This is an excellent entry point into healthcare careers.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Helping patients with personal care and daily activities</li>
                  <li>Taking vital signs (temperature, blood pressure, pulse)</li>
                  <li>Assisting with feeding and mobility</li>
                  <li>Maintaining patient records</li>
                  <li>Supporting nursing staff with patient care</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>No formal qualifications required (training provided)</li>
                  <li>Good communication skills</li>
                  <li>Compassionate and caring nature</li>
                  <li>Physical fitness for moving and lifting</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  With experience and additional training, HCAs can progress to specialized roles or pursue nursing qualifications.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "entry-domestic" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Domestics/Porters</CardTitle>
              <CardDescription>Essential support roles in healthcare facilities</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Domestic staff and porters provide essential support services that keep healthcare facilities 
                  running smoothly and safely for patients and staff.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Cleaning and maintaining hospital wards and departments</li>
                  <li>Transporting patients, equipment, and supplies</li>
                  <li>Ensuring infection control standards are met</li>
                  <li>Supporting meal service to patients</li>
                  <li>Maintaining a safe and hygienic environment</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>No formal qualifications required</li>
                  <li>Physical fitness for cleaning and moving tasks</li>
                  <li>Attention to detail and hygiene standards</li>
                  <li>Reliable and punctual</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  Many healthcare careers begin with domestic or porter roles, with opportunities to move into 
                  patient care roles with additional training.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "entry-admin" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Administrators</CardTitle>
              <CardDescription>Administrative support roles in healthcare settings</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Administrative staff provide crucial support to healthcare teams, managing appointments, 
                  records, and communication with patients and families.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Managing patient appointments and scheduling</li>
                  <li>Handling telephone inquiries and correspondence</li>
                  <li>Maintaining patient records and databases</li>
                  <li>Processing referrals and insurance claims</li>
                  <li>Supporting medical staff with administrative tasks</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Good computer and communication skills</li>
                  <li>Attention to detail and organizational skills</li>
                  <li>Experience with office software (training provided)</li>
                  <li>Customer service orientation</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  Administrative roles can lead to specialized positions in medical records, practice management, 
                  or health information systems.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "nursing" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-800">Nurses</CardTitle>
              <CardDescription>Registered nursing positions in various healthcare settings</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Registered nurses provide direct patient care, administer medications, and coordinate with 
                  healthcare teams to deliver comprehensive patient care.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Assessing and monitoring patient health</li>
                  <li>Administering medications and treatments</li>
                  <li>Developing and implementing care plans</li>
                  <li>Educating patients and families about health conditions</li>
                  <li>Collaborating with doctors and other healthcare professionals</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nursing degree and registration with NMC (Nursing and Midwifery Council)</li>
                  <li>International nurses may need to complete adaptation programs</li>
                  <li>Strong clinical skills and knowledge</li>
                  <li>Excellent communication and interpersonal skills</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  Nurses can specialize in areas like critical care, pediatrics, mental health, or advance to 
                  management and advanced practice roles.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "ahp" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-800">Allied Health Professionals</CardTitle>
              <CardDescription>Specialized therapeutic and diagnostic healthcare roles</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Allied Health Professionals include physiotherapists, occupational therapists, radiographers, 
                  and other specialists who provide therapeutic and diagnostic services.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Roles Include</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Physiotherapists - helping patients recover movement and function</li>
                  <li>Occupational Therapists - supporting daily living skills</li>
                  <li>Radiographers - performing medical imaging</li>
                  <li>Speech and Language Therapists - treating communication disorders</li>
                  <li>Dietitians - providing nutritional guidance</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Relevant degree and professional registration with HCPC</li>
                  <li>International professionals may need UK qualification recognition</li>
                  <li>Specialized clinical skills in chosen field</li>
                  <li>Strong problem-solving and communication skills</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  AHPs can advance to specialist roles, research positions, or leadership roles within their 
                  professional areas.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "medical" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-2xl text-purple-800">Doctors</CardTitle>
              <CardDescription>Medical practitioner positions across various specialties</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Doctors diagnose and treat patients across various medical specialties, from general practice 
                  to specialized hospital-based medicine.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Diagnosing and treating medical conditions</li>
                  <li>Performing medical procedures and examinations</li>
                  <li>Prescribing medications and treatments</li>
                  <li>Leading healthcare teams and making clinical decisions</li>
                  <li>Continuing professional development and research</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Medical degree and registration with GMC (General Medical Council)</li>
                  <li>International medical graduates must pass PLAB exams or equivalent</li>
                  <li>Completion of foundation training and specialty training</li>
                  <li>Excellent clinical knowledge and decision-making skills</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  Doctors can specialize in areas like surgery, psychiatry, pediatrics, or pursue academic 
                  medicine and research careers.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "dental" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-2xl text-purple-800">Dentists</CardTitle>
              <CardDescription>Dental care professionals in various practice settings</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Job Description</h3>
                <p className="text-gray-700">
                  Dentists provide oral healthcare services, from routine check-ups and preventive care 
                  to complex dental procedures and treatments.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Examining and diagnosing dental conditions</li>
                  <li>Performing dental procedures (fillings, extractions, root canals)</li>
                  <li>Providing preventive dental care and education</li>
                  <li>Managing dental emergencies</li>
                  <li>Working with dental teams to provide comprehensive care</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Dental degree and registration with GDC (General Dental Council)</li>
                  <li>International dentists may need to pass ORE (Overseas Registration Exam)</li>
                  <li>Clinical skills in dental procedures</li>
                  <li>Good manual dexterity and attention to detail</li>
                  <li>Right to work in the UK</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900">Career Progression</h3>
                <p className="text-gray-700">
                  Dentists can specialize in areas like orthodontics, oral surgery, or practice management, 
                  or establish their own dental practices.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => setCurrentStep("help-form")}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Get Help Finding This Job
                </Button>
                <Button variant="outline" onClick={() => setCurrentStep("categories")}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {currentStep === "help-form" && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-800">Get Help with Your Application</CardTitle>
              <CardDescription>We're here to support you in your job search</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">What happens Next?</h3>
                <p className="text-sm mb-3">
                  Once you have completed the Help form we aim to get back to you within working 7 days.
                </p>
                <p className="text-sm">
                  In order for us to help you with your query you must give consent for us to share your information with
                  our partners (Charities & NHS Trusts) who specialise in your specific query.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={userData.fullName}
                      onChange={(e) => updateUserData("fullName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={userData.mobile}
                      onChange={(e) => updateUserData("mobile", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Home Address *</Label>
                  <Input
                    id="address"
                    value={userData.address}
                    onChange={(e) => updateUserData("address", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="postCode">Post Code *</Label>
                  <Input
                    id="postCode"
                    value={userData.postCode}
                    onChange={(e) => updateUserData("postCode", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email-confirm">Email *</Label>
                  <Input
                    id="email-confirm"
                    type="email"
                    value={userData.email}
                    onChange={(e) => updateUserData("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="profession-confirm">What is your profession? *</Label>
                  <Input
                    id="profession-confirm"
                    value={userData.profession}
                    onChange={(e) => updateUserData("profession", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="interestedJob">Which job are you interested in? *</Label>
                  <Select onValueChange={(value) => updateUserData("interestedJob", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a job category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hca">Health Care Assistant/Support Worker</SelectItem>
                      <SelectItem value="domestic">Domestic/Porter</SelectItem>
                      <SelectItem value="admin">Administrator/Receptionist</SelectItem>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="ahp">Allied Health Professional</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="dentist">Dentist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="helpNeeded">What help do you need? *</Label>
                  <Select onValueChange={(value) => updateUserData("helpNeeded", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type of help needed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="application">Completing application forms</SelectItem>
                      <SelectItem value="interview">Preparing for job interviews</SelectItem>
                      <SelectItem value="cv">Creating a CV/Resume</SelectItem>
                      <SelectItem value="registration">Professional registration guidance</SelectItem>
                      <SelectItem value="general">General career advice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consent"
                    checked={userData.consent}
                    onCheckedChange={(checked) => updateUserData("consent", checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm">
                    Do you give consent for us to share your information with our partners? *
                  </Label>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700"
                    disabled={
                      !userData.fullName ||
                      !userData.mobile ||
                      !userData.address ||
                      !userData.postCode ||
                      !userData.interestedJob ||
                      !userData.helpNeeded ||
                      !userData.consent
                    }
                  >
                    Submit Help Request
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setCurrentStep("categories")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
