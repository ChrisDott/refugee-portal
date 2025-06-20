"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, Heart, Stethoscope, UserCheck, GraduationCap } from "lucide-react"

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

  const WelcomeStep = () => (
    <div className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent">
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
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
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
  )

  const CategoriesStep = () => (
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
            <p className="text-sm text-gray-500 text-center pt-2">
              Physiotherapists, Occupational Therapists, Radiologists, Nutritionists
            </p>
          </CardContent>
        </Card>

        <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Medical & Dental</CardTitle>
            <p className="text-gray-600">Advanced medical professionals</p>
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
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={() => setCurrentStep("welcome")}
          className="h-12 px-8 text-base border-2 rounded-xl hover:bg-gray-50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>
    </div>
  )

  const EntryHCAStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">Health Care Assistants/Workers</CardTitle>
          <CardDescription>Entry Level Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">What is an entry level job? HCA</h3>
            <p className="text-sm">
              An entry-level job is a position designed for individuals with minimal or no prior work experience in a
              specific field. In the NHS these include Health Care Assistants/Workers, etc. This job can also be your
              entry point to become a nurse/AHP.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Learn More About This Role</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/healthcare-support-worker/roles-healthcare-support-worker/healthcare-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Healthcare assistant | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Refugee Employment Programme :: North West London ICS
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Heal your mind. Care for your body. | Arian Wellbeing
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=Health%20Care%20Assistant&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Health Care Assistant jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-green-600 hover:bg-green-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const EntryDomesticStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">Domestics (Cleaners, Porters)</CardTitle>
          <CardDescription>Entry Level Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">What do Domestics (Cleaners, Porters) do?</h3>
            <p className="text-sm">
              Domestic staff make sure the hospitals are clean, comfortable places and prepare and serve food for staff
              and patients.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Learn More About This Role</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/healthcare-support-worker/roles-healthcare-support-worker/domestic-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Domestic services | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Refugee Employment Programme :: North West London ICS
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Heal your mind. Care for your body. | Arian Wellbeing
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=Domestic%20Cleaner%20Porter&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Domestic Cleaner Porter jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-green-600 hover:bg-green-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const EntryAdminStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-green-50">
          <CardTitle className="text-2xl text-green-800">Administrative Roles</CardTitle>
          <CardDescription>Entry Level Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">What is an entry level job? Admin</h3>
            <p className="text-sm">
              An entry-level job is a position designed for individuals with minimal or no prior work experience in a
              specific field. In the NHS these include Administrators, receptionists etc. This job can also be your
              entry point to become a Team leader, Supervisor or manager.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Learn More About This Role</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/administration/roles-administration/receptionist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Receptionist | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Refugee Employment Programme :: North West London ICS
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Heal your mind. Care for your body. | Arian Wellbeing
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=administrator%20receptionist&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Administrator receptionist jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-green-600 hover:bg-green-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const NursingStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-2xl text-blue-800">Nursing Roles</CardTitle>
          <CardDescription>Professional Healthcare Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">What is a Nursing role in the NHS?</h3>
            <p className="text-sm">
              As a qualified nurse, you'll work as part of a multidisciplinary team, providing direct patient care. You
              can choose to work in a variety of settings, everything from hospital wards and operating theatres to
              schools and patients' homes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Learn More About This Role</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/nursing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Nursing careers | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Refugee Employment Programme :: North West London ICS
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Heal your mind. Care for your body. | Arian Wellbeing
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=Nurse&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Nurse jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-blue-600 hover:bg-blue-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const AHPStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-blue-50">
          <CardTitle className="text-2xl text-blue-800">Allied Health Professional (AHP)</CardTitle>
          <CardDescription>Professional Healthcare Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">What is an Allied Health Professional role in the NHS?</h3>
            <p className="text-sm">
              As an allied health professional you'll be able to help patients whether that's by helping someone learn
              to walk again or fixing a child's squint. You'll work alongside a multidisciplinary team of doctors and
              nurses, in a range of settings including hospitals and patient's homes, as you help patients overcome
              obstacles, both mentally and physically.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Learn More About This Role</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/allied-health-professionals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Roles in the allied health professions | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Refugee Employment Programme :: North West London ICS
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Heal your mind. Care for your body. | Arian Wellbeing
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=allied%20health%20care&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Allied health care jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-blue-600 hover:bg-blue-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const MedicalStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-purple-50">
          <CardTitle className="text-2xl text-purple-800">Medical Doctor Roles</CardTitle>
          <CardDescription>Professional Medical Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">What is a Medical Doctor's role in the NHS?</h3>
            <p className="text-sm mb-3">
              Doctors work in all areas of healthcare providing them with endless career possibilities. As part of the
              medical training, you'll have the opportunity to try out many of these fantastic specialities and then
              choose the one you would like as your speciality.
            </p>
            <p className="text-sm font-semibold text-red-700">
              All doctors intending to practise medicine in the UK are required to be registered with the General
              Medical Council (GMC) and be subject to the GMC Fitness to Practise actions.
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=Trust%20grade%20doctor&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Trust grade doctor jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Useful Resources for Medical Doctors</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/doctors/information-overseas-doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Information for overseas doctors | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                REACHE: The Refugee and Asylum Seekers Centre for Healthcare Professionals Education
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Building Bridges Programme for Refugee Health Professionals - Refugee Council
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                OVERSEAS DOCTORS – IPC
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                RefuAid
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Who We Are — The Phoenix Project
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-purple-600 hover:bg-purple-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const DentalStep = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader className="bg-purple-50">
          <CardTitle className="text-2xl text-purple-800">Dentist Roles</CardTitle>
          <CardDescription>Professional Dental Position</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">What is a Dentist's role in the NHS?</h3>
            <p className="text-sm">
              Getting started will really depend on the role you want to do. Some roles, such as dentist and dental
              therapy, will need a university education such as a degree or diploma. Other roles, such as dental nurse,
              do not necessarily need a degree education and you can start your career by applying for an
              apprenticeship.
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">Interested? Find Available Jobs</h3>
            <a
              href="https://www.jobs.nhs.uk/candidate/search/results?keyword=Dentist&location=London"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Dentist jobs in London - NHS Jobs
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Useful Resources</h3>
            <div className="grid gap-3">
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/dental-team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Dental team | Health Careers
              </a>
              <a
                href="https://www.healthcareers.nhs.uk/explore-roles/dental-team/information-overseas-dentists"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Information for overseas dentists | Health Careers
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                REACHE: The Refugee and Asylum Seekers Centre for Healthcare Professionals Education
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Building Bridges Programme for Refugee Health Professionals - Refugee Council
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                RefuAid
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Who We Are — The Phoenix Project
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Get support | Freedom from Torture
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Do you need help?</h3>
            <p className="text-sm text-gray-600">
              Completing the application form, preparing for a job interview, creating a CV/Resume etc
            </p>
            <Button onClick={() => setCurrentStep("help-form")} className="bg-purple-600 hover:bg-purple-700">
              Get Help - Complete Form
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setCurrentStep("categories")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const HelpFormStep = () => (
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
  )

  const renderStep = () => {
    switch (currentStep) {
      case "welcome":
        return <WelcomeStep />
      case "categories":
        return <CategoriesStep />
      case "entry-hca":
        return <EntryHCAStep />
      case "entry-domestic":
        return <EntryDomesticStep />
      case "entry-admin":
        return <EntryAdminStep />
      case "nursing":
        return <NursingStep />
      case "ahp":
        return <AHPStep />
      case "medical":
        return <MedicalStep />
      case "dental":
        return <DentalStep />
      case "help-form":
        return <HelpFormStep />
      default:
        return <WelcomeStep />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 py-12 px-4">
      {renderStep()}
    </div>
  )
}
