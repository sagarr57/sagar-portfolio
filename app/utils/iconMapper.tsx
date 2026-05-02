// Icon mapper utility to dynamically import icons
import { 
  IoMailOutline, 
  IoCallOutline, 
  IoLocationOutline 
} from 'react-icons/io5'
import { 
  TbBrandLinkedin, 
  TbBrandGithub,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandDocker,
  TbBrandGit,
  TbBrandPython,
} from 'react-icons/tb'
import {
  SiMaterialdesign,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiJira,
  SiFigma,
  SiPostman,
  SiJest,
  SiMocha,
  SiSlack,
  SiGooglecloud,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPytorch,
  SiSwagger,
  SiFastapi,
  SiOpenai,
  SiSupabase,
  SiN8N,
  SiWhatsapp,
} from 'react-icons/si'
import { BiTestTube } from 'react-icons/bi'
import { 
  FaBrain, 
  FaRocket, 
  FaCode, 
  FaNetworkWired,
  FaBriefcase,
  FaProjectDiagram,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaRobot,
} from 'react-icons/fa'

const iconMap: Record<string, React.ComponentType<any>> = {
  // Contact icons
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  // Social icons
  TbBrandLinkedin,
  TbBrandGithub,
  // Tech icons
  TbBrandReact,
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandNodejs,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandDocker,
  TbBrandGit,
  TbBrandPython,
  SiMaterialdesign,
  SiBootstrap,
  SiRedux,
  SiExpress,
  SiJira,
  SiFigma,
  SiPostman,
  SiJest,
  SiMocha,
  SiSlack,
  SiGooglecloud,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiPytorch,
  SiSwagger,
  SiFastapi,
  SiOpenai,
  SiSupabase,
  SiN8N,
  SiWhatsapp,
  BiTestTube,
  FaBrain,
  FaRocket,
  FaCode,
  FaNetworkWired,
  FaBriefcase,
  FaProjectDiagram,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaRobot,
}

export const getIcon = (iconName: string, props?: any) => {
  const IconComponent = iconMap[iconName]
  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found`)
    return null
  }
  return <IconComponent {...props} />
}

